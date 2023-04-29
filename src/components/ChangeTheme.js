import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import { changeTheme } from '../features/theme';

function ChangeTheme() {
    const [theme, setTheme] = useState("");

    const dispatch = useDispatch();

    return (
        <div>
            <input type="text" onChange={(event) => {
                setTheme(event.target.value);
            }}/>
            <button onClick={() => {
                dispatch(changeTheme(theme))
            }}>CHANGE COLOR</button>
        </div>
    )
}

export default ChangeTheme
