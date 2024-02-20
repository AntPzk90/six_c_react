import React from "react";

const List = ({children, styleClass}) => {
    return (

        <ul className={styleClass}>
            {children}
        </ul>

    )
}

export default List;
