// admin/assets/admin-logic.js

const AdminApp = {
    // Carga datos desde el JSON original
    async fetchData(path) {
        try {
            const response = await fetch(`../data/${path}`);
            return await response.json();
        } catch (error) {
            console.error("Error cargando datos:", error);
            return [];
        }
    },

    // Genera la descarga del nuevo archivo JSON
    exportJSON(data, filename) {
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        a.click();
        URL.revokeObjectURL(url);
        alert("Archivo generado. Reemplaza el archivo en la carpeta /data/ de tu proyecto.");
    }
};