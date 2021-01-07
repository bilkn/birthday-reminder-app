function getFileURL (file) {
    const url = URL.createObjectURL(file);
    return url;
}

export default getFileURL;