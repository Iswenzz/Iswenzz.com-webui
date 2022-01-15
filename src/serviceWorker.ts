/**
 * Register service worker.
 * @param config - Service worker config.
 * @returns 
 */
export const register = (config: any) =>
{
	if (process.env.NODE_ENV === "production" && "serviceWorker" in navigator) 
	{
	  	// The URL constructor is available in all browsers that support SW.
		const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
		
		// https://github.com/facebook/create-react-app/issues/2374
		// Our service worker won't work if PUBLIC_URL is on a different origin
		// from what our page is served on. This might happen if a CDN is used to
		// serve assets.
		if (publicUrl.origin !== window.location.origin)
			return;
  
		window.addEventListener("load", () => 
		{
			const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

			// This is running on localhost. Let's check if a service worker still exists or not.
			// Is not localhost. Just register service worker
			if (isLocalhost) checkValidServiceWorker(swUrl, config);
			else registerValidServiceWorker(swUrl, config);
		});
	}
};
  
/**
 * Register valid service worker.
 * @param url - Service worker URL.
 * @param config - Service worker config.
 */
const registerValidServiceWorker = async (url: string, config: any) =>
{
	try
	{
		const registration = await navigator.serviceWorker.register(url);

		registration.onupdatefound = () => 
		{
			const installingWorker = registration.installing;
			if (installingWorker == null)
				return;

			installingWorker.onstatechange = () => 
			{
				if (installingWorker.state === "installed") 
				{
					if (navigator.serviceWorker.controller) 
					{
						if (config && config.onUpdate)
							config.onUpdate(registration);
					} 
					else 
					{
						if (config && config.onSuccess)
							config.onSuccess(registration);
					}
				}
		 	};
		};
	}
	catch (error)
	{
		console.error("Error during service worker registration:", error);
	}
};
  
/**
 * Check if the service worker can be found. If it can't reload the page.
 * @param url - Service worker URL.
 * @param config - Service worker config.
 */
const checkValidServiceWorker = async (url: string, config: any) =>
{
	try
	{
		const response = await fetch(url, { headers: { "Service-Worker": "script" }});

		// Ensure service worker exists, and that we really are getting a JS file.
		const contentType = response.headers.get("content-type");
		if (response.status === 404 || (contentType != null && contentType.indexOf("javascript") === -1)) 
		{
			// No service worker found. Probably a different app. Reload the page.
			const registration = await navigator.serviceWorker.ready;
			await registration.unregister();
			window.location.reload();
		} 
		else // Service worker found. Proceed as normal.
			registerValidServiceWorker(url, config);
	}
	catch
	{
		console.log("No internet connection found. App is running in offline mode.");
	}
};

/**
 * Unregister service worker.
 */
export const unregister = async () =>
{
	if ("serviceWorker" in navigator) 
	{
		const registration = await navigator.serviceWorker.ready;
		registration.unregister();
	}
};

/**
 * [::1] is the IPv6 localhost address.
 * 127.0.0.0/8 are considered localhost for IPv4.
 */
const isLocalhost = Boolean(
	window.location.hostname === "localhost" ||
	window.location.hostname === "[::1]" ||
	window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)
);
