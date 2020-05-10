import { useState } from "react";

const Chat = () => {
    const [form, setForm] = useState({ msg: "", code: "" });
    return (
        <div>
            <div> User said : {form.msg}</div>
            <div>
                <input name="chatarea" type="text" onChange={(event) => { setForm({ ...form, msg: event.target.value }) }} placeholder="put a message here" />
                <button type="submit"> send </button>
            </div>
        </div>
    )
}
export default Chat;