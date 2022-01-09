import React from "react";

const WebToolsList = (props) => {
    const webToolsList = props.webToolsList;

    return (
        <>
            {webToolsList.map((data, index) => {
                if (data) {
                    return (
                        <div key={data}>
                            <p>{data}</p>
                        </div>
                    );
                } else {
                    return null;
                }
            })}
        </>
    );
};

export default WebToolsList;
