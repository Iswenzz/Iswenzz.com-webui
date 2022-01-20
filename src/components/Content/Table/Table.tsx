import { FC, useMemo, useState } from "react";
import ReactDataGrid, { Column } from "react-data-grid";
import { useTheme } from "@mui/material";
import { Pagination } from "@mui/lab";

import { Loader } from "components";

import scss from "./Table.module.scss";
import classNames from "classnames";

/**
 * React data grid table.
 * @returns
 */
const Table: FC<TableProps> = ({ loading, sortCompare = defaultSortCompare, rows, columns = [], ...rest }) =>
{
	const { theme } = useTheme();

	const [page, setPage] = useState<number>(0);
	const [[sortColumn, sortDirection], setSort] = useState<[string, SortDirection]>(["id", "NONE"]);


	/**
	 * Sorted rows data.
	 */
	const sortedRows = useMemo((): Row[] =>
	{
		const startIndex = Math.round(page * 10);
		if (sortDirection === "NONE")
			return rows.slice(startIndex, startIndex + 10);
		let sortedRows: Row[] = [...rows];

		sortedRows = sortedRows.sort((a: Row, b: Row) => sortCompare(sortColumn, a, b));
		if (sortDirection === "DESC")
			sortedRows.reverse();

		return sortedRows.slice(startIndex, startIndex + 10);
	}, [page, sortDirection, rows, sortCompare, sortColumn]);

	/**
	 * Callback on column sorting.
	 */
	const onSort = (columnKey: string, direction: SortDirection): void =>
		setSort([columnKey, direction]);

	/**
	 * Callback on page change.
	 */
	const onPageChange = () => setPage(page);

	return (
		<section className={classNames(scss.table, scss[theme])}>
			<ReactDataGrid
				columns={columns}
				rowGetter={sortedRows}
				rowHeight={70}
				rowsCount={50}
				sortDirection={sortDirection}
				sortColumn={sortColumn}
				onGridSort={onSort}
				{...rest}
			/>
			{loading && <Loader className={scss.loader} />}
			<Pagination count={Math.floor(rows.length / 10)} page={page} onChange={onPageChange} />
		</section>
	);
};

export type Row<R = any> = R;
export type SortDirection = "ASC" | "DESC" | "NONE";

export type TableProps = {
	name?: string,
	columns?: Column<Row>[],
	rows: Row[],
	sortCompare?: (sortColumn: string, a: Row, b: Row) => number,
	loading?: boolean
};

/**
 * Compare two string.
 * @param a - String A.
 * @param b - String B.
 * @returns
 */
const defaultSortCompare = (a: string, b: string) => a.localeCompare(b);

export default Table;
