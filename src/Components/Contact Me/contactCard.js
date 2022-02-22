function ContactCard(props) {
    const { icon, title, desc } = props;

    return (
        <div className="contact--sideCard">
            
            <div className="contact--icon">
                <span>
                    <i className={icon}></i>
                </span>
            </div>

            <div className="contact--details">
                <label>{title}</label>
                <label>{desc}</label>
            </div>
            
        </div>
    );
}

export default ContactCard;
