export const saveVersion = async (versionName, linkID) => {
    try {
        const requestOptions = {
            method: "POST",
            body: JSON.stringify({ codeVersionName: versionName, id: linkID }),
            headers: { "Content-Type": "application/json" },
        };
        const result = await fetch("http://localhost:8000/version/save-version", requestOptions);
        const message = await result.json();
        return message;
    }
    catch (error) {
        console.error(error);
    }
}