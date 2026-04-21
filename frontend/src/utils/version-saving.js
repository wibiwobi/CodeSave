export const saveVersion = async (versionName, linkID, saveButtonState) => {
    try {
        if (saveButtonState) { return; }

        const requestOptions = {
            method: "POST",
            body: JSON.stringify({ versionName: versionName, linkID: linkID }),
            headers: { "Content-Type": "application/json" },
        };
        const result = await fetch("http://localhost:8000/version/save-version", requestOptions);
        const message = await result.json();
        console.log(message);
    }
    catch (error) {
        console.error(error);
    }
}