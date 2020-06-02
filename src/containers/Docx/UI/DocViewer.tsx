import React, { FunctionComponent, useEffect } from 'react';
import { useHistory } from 'react-router';
import { animateScroll as scroll } from 'react-scroll';
import { getElementByXPath } from 'utility/utility';
import './DocViewer.scss';
import 'Text.scss';

/**
 * Doxygen document viewer container.
 * @todo loadDoc on history change / get req.
 * @todo change project folder with properties.
 * @todo when project load, load the readme.md from github.
 * @todo navigation files / classes.
 * @todo responsive.
 * @todo light theme.
 * @todo syntax highlight VS2015 for dark and AtomOneLight for light theme.
 * @todo show diagrams with no interaction except moving/zoom.
 */
export const DocViewer: FunctionComponent = (): JSX.Element =>
{
	let history = useHistory();

	useEffect(() =>
	{
		// @todo test remove later.
		loadDoc("cgsc__variable_8c.html");
	}, []);

	/**
	 * Load html document to the viewer, and scroll to specified hash anchor.
	 * @param link Html document url.
	 * @param hash Anchor hash string.
	 */
	const loadDoc = (link: string, hash?: string): void =>
	{
		fetch(`https://iswenzz.com:1337/iswenzz/docs/cgsc/${link}`).then(response => response.text()).then(text => 
		{
			let div = document.getElementById(`doc-test`);
			if (div)
			{
				// remove all link tags
				text = text.replace(/<link.*>/gi, "");
				// remove all iframes
				text = text.replace(/<iframe.*iframe>/gi, "");
				// set the page html
				div.innerHTML = text;

				// scroll to hash if defined.
				const elem = getElementByXPath(`//a[@href='${hash}']`);
				if (elem && elem instanceof HTMLAnchorElement)
					scroll.scrollTo(elem.offsetTop - 48);
				
				/*
				// set uml iframes @todo
				let dyncontents = getElementsByXPath("//div[@class='dyncontent']");
				for (let i = 0; i < dyncontents.length; i++)
				{
					let div = document.createElement("div");
					let iframe = document.createElement("iframe");
					iframe.setAttribute("scrolling", "no");
					iframe.setAttribute("frameborder", "0");

					// @todo test url first
					let url: string = `https://iswenzz.com:1337/iswenzz/docs/cgsc/${link.replace(".html", "")}`;
					switch (i)
					{
						case 0: // deps
							iframe.setAttribute("src", `${url}__incl.svg`);	
							break;
						case 1: // include graph
							iframe.setAttribute("src", `${url}__dep__incl.svg`);	
							div.classList.add("iframe-center"); 	
							break;
					}
					div.appendChild(iframe);
					dyncontents[i].appendChild(div);
				}
				*/
			}
		});
	}

	const onClickHandler = (e: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>): void =>
	{
		e.preventDefault();

		const c_docpath: string = `/docs/cgsc/`;
		const c_pathname: string = history.location.pathname;
		const c_file: string = c_pathname.substring(c_pathname.indexOf(c_docpath) 
			+ c_docpath.length, c_pathname.length);

		if (e.target instanceof HTMLAnchorElement)
		{
			const link: string = (e.target.attributes as any).href.value;
			if (link.includes(".html"))
			{
				// change html page if needed, and scroll to selected anchor.
				if (link.includes(".html#"))
				{
					const hash: string = link.substring(link.indexOf(".html#") + 5, link.length);
					const url: string = link.substring(0, link.indexOf(".html#") + 5);

					if (url !== c_file)
						loadDoc(url, hash);
					else
					{
						const elem = getElementByXPath(`//a[@href='${hash}']`);
						if (elem && elem instanceof HTMLAnchorElement)
							scroll.scrollTo(elem.offsetTop - 48);
					}
					history.push(`/docs/cgsc/${url}${hash || ""}`);
				}
				// change html page with no selected anchor.
				else if (link.endsWith(".html") && link !== c_file)
				{
					loadDoc(link);
					history.push(`/docs/cgsc/${link}`);
				}
			}
			else // stay on the page and add hash to url
				history.push(`${c_docpath}${c_file}${link}`);
		}
	}

	return (
		<div id="doc-test" onClick={onClickHandler} className="iswenzz-doxygen ubuntu-h2" />
	);
}

export default DocViewer;