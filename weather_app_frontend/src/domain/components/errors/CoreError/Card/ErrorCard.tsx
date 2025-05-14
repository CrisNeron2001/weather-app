import { StyleMainCard } from "../../../../../styles/components/Card/MainCard/StyleMainCard";
import { ErrorStateProps } from "../../../../../core/classes/interfaces/Error/ErrorStateProps/ErrorStateProps";
import { RenderInternalError } from "../../TypeError/ErrorInternal/RenderInternalError";
import { RenderPageNotFound } from "../../TypeError/PageNotFound/RenderPageNotFound";
import { RenderBadRequest } from "../../TypeError/BadRequest/RenderBadRequest";

export const ErrorCard = ({ errorStatus }: ErrorStateProps) => {
	return (
		<StyleMainCard>
			{errorStatus == 404 ? (
				<RenderPageNotFound/>
			) : errorStatus == 500 ? (
				<RenderInternalError/>
			) : (
				<RenderBadRequest/>
			)}
		</StyleMainCard>
	);
};