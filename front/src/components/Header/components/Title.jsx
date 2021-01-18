import React from "react";
import Typography from "@material-ui/core/Typography";

export const Title = ({ renderComponent }) => {
    return (
        <Typography variant="h6">
            {renderComponent.whichComponentToShow}
        </Typography>
    )
};