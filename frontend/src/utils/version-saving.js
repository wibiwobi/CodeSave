export const saveVersion = async (versionName, id) => {
    try {
        const requestOptions = {
            method: "POST",
            body: JSON.stringify({ versionName: versionName, id: id }),
            headers: { "Content-Type": "application/json" },
        };

        const result = await fetch("", requestOptions);
        const data = await result.json();

    }
    catch (error) {
        console.error(error);
    }

    finally {

    }
}