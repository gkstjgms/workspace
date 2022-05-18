import axios from 'axios';

export async function AddItems(todo) {
    try {
        return await axios.post('/addItem', {
            text: todo.text,
        });
    } catch (err) {
        console.log(err);
    }
}

export async function GetItems() {
    try {
        const response = await axios.get('/getItem', {});
        return response.data;
    } catch (err) {
        console.log(err);
    }
}

export async function ToggleItems(todo) {
    try {
        return await axios.put('/putItem', {
            id: todo.id,
            done: todo.done === 1 ? 0 : 1,
        });
    } catch (err) {
        console.log(err);
    }
}

export async function DeleteItems(todo) {
    try {
        return await axios.delete('/deleteItem', {
            data: { id: todo.id },
        });
    } catch (err) {
        console.log(err);
    }
}

export async function Login(userid: string, userpw: string) {
    const response = await axios.post(
        '/findUser',
        {
            userid: userid,
            userpw: userpw,
        },
    );
    return response;
}
