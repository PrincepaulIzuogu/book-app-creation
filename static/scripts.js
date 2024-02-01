function validateForm() {
    var title = document.getElementById('title').value;
    var author = document.getElementById('author').value;
    var publicationYear = document.getElementById('publication_year').value;

    if (title === '' || author === '' || publicationYear === '') {
        alert('All fields must be filled out');
        return false;
    }

    return true;
}
