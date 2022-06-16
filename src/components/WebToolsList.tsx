import React from 'react';

type webToolsListProps = {
    webToolsList: string[];
};

const WebToolsList = (props: webToolsListProps) => {
    const webToolsList = props.webToolsList;

    return (
        <>
            {webToolsList.map((data: string, index: number) => {
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
