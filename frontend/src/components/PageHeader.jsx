import "../styles/pageHeader.css";

function PageHeader({

    title,
    subtitle,
    buttonText,
    onButtonClick

}) {

    return (

        <div className="page-header">

            <div>

                <h1>{title}</h1>

                <p>{subtitle}</p>

            </div>

            <button
                className="add-btn"
                onClick={onButtonClick}
            >

                + {buttonText}

            </button>

        </div>

    );

}

export default PageHeader;