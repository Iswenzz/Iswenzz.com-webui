import { FC } from "react";
import { noop } from "lodash";
import { Backdrop as MUIBackdrop, BackdropProps } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import classNames from "classnames";

import { animationFade } from "utils/animate";

import scss from "./Backdrop.module.scss";

/**
 * Backdrop component.
 */
const Backdrop: FC<Props> = ({ disableClose = false, onClick = noop, open, className, ...props }) =>
{
	/**
	 * Handle closing backdrop on click.
	 * @param e - Click event.
	 */
	const handleClose = (e: React.MouseEvent<HTMLElement>) => disableClose ? null : onClick(e);

	return (
		<AnimatePresence>
			<motion.div variants={animationFade()} initial={"enter"} animate={open ? "enter" : "exit"} exit="exit">
				<div className={classNames(className, scss.backdrop)}>
					<MUIBackdrop {...props} className={scss.muiBackdrop} open={open} onClick={handleClose} />
				</div>
			</motion.div>
		</AnimatePresence>
	);
};

/**
 * Create a backdrop with dynamic disabled state.
 * @param disableState - The disable state for closing the backdrop.
 * @returns
 */
export const createBackdrop = (disableState: boolean) => (props: BackdropProps) =>
	<Backdrop {...props} transitionDuration={0} disableClose={disableState} />;

type Props = BackdropProps & {
	disableClose?: boolean
};

export default Backdrop;
