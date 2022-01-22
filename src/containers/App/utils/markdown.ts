import MarkdownIt, { Options } from "markdown-it";
import hljs from "highlight.js";

/**
 * Highlight code with in a specific language.
 * @param content - The code content.
 * @param language - The highlight language.
 * @returns
 */
export const highlight = (content: string, language: string) =>
{
	if (language && hljs.getLanguage(language))
	{
		try
		{
			return "<pre class=\"hljs\"><code>"
				+ hljs.highlight(content, { language, ignoreIllegals: true }).value
				+ "</code></pre>";
		}
		catch { }
	}
	return "<pre class=\"hljs\"><code>" + MarkdownIt().utils.escapeHtml(content) + "</code></pre>";
};

/**
 * Render markdown content.
 * @param content - The content to markdown.
 * @param options - The markdown render options.
 * @returns
 */
const markdown = (content: string, options?: Options) =>
{
	const markdownIt: MarkdownIt = MarkdownIt({
		html: true,
		xhtmlOut: false,
		breaks: false,
		langPrefix: "language-",
		linkify: true,
		typographer: false,
		highlight,
		...options
	});
	return markdownIt.render(content);
};

export default markdown;
