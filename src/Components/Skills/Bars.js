import reactDom from "react-dom";

function Bars(props) {
    const { name, percentage } = props;
    
    // internal style becuase percentage is dynamic
    const style = {
        background: "#6a72fc",
        width: percentage,
        height: "inherit",
    };

    return (
        <div className="bars--section">
            <p>{name}</p>
            <div>
                <div style={style}></div>
            </div>
        </div>
    );
}

export default Bars;
