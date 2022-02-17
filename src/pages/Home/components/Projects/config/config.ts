import iswenzzJson from "./Iswenzz.json";
import aionJson from "./AION.json";
import cod4Json from "./CoD4.json";
import schoolJson from "./School.json";
import projectsJson from "./Projects.json";

import type { ProjectSource } from "../components/Project/Project";

export const projectsSource: ProjectSource[] = [
	...iswenzzJson,
	...aionJson,
	...cod4Json,
	...schoolJson,
	...projectsJson
];
