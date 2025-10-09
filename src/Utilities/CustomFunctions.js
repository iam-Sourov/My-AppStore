export const loadInstallData = () => {
    try {
        const data = localStorage.getItem('Installed');
        return data ? JSON.parse(data) : []
    } catch (err) {
        console.log(err)
        return []
    }
}

export const installationList = (app) => {
    const installedApp = loadInstallData();
    try {
        const isDuplicate = installedApp.some(iapp => iapp.id === app.id);
        if (isDuplicate) return alert("Already Added Into Installation")
        const updatedInstalledApp = [...installedApp, app]
        localStorage.setItem("Installed", JSON.stringify(updatedInstalledApp))
    } catch (err) {
        console.log(err)
    }
}