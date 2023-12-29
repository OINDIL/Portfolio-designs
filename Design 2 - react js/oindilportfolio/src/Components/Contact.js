export default function Contact(){
    return (
        <>
            <div className="contact">
                <p>Contact</p>
                <div className="contact-container">
                    <div className="contact-label">
                        <p>Contact images and links</p>
                    </div>
                    <div className="contact-form">
                        <form>
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" />
                            <label htmlFor="address">E-mail</label>
                            <input type="email" id="address"/>
                            <label htmlFor="message">Message</label>
                            <textarea name="message" id="message" cols="30"></textarea>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}