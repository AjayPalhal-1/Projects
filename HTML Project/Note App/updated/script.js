// Select necessary elements
const addNoteBtn = document.getElementById('add-note-btn');
const notesSection = document.getElementById('notes-section');
const noteTitleInput = document.getElementById('note-title');
const noteContentInput = document.getElementById('note-content');

// Add Note Function
addNoteBtn.addEventListener('click', () => {
    const noteTitle = noteTitleInput.value.trim();
    const noteContent = noteContentInput.value.trim();

    if (noteTitle === '' || noteContent === '') {
        alert('Please enter both a title and content for the note.');
        return;
    }

    // Create note elements
    const note = document.createElement('article');
    note.classList.add('note');

    const noteTitleElement = document.createElement('h3');
    noteTitleElement.textContent = noteTitle;

    const noteContentElement = document.createElement('p');
    noteContentElement.textContent = noteContent;

    // Add delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.style.marginTop = '10px';
    deleteBtn.style.backgroundColor = '#e74c3c';
    deleteBtn.style.color = 'white';
    deleteBtn.style.border = 'none';
    deleteBtn.style.padding = '5px 10px';
    deleteBtn.style.borderRadius = '5px';
    deleteBtn.style.cursor = 'pointer';
    deleteBtn.addEventListener('click', () => {
        note.remove();
    });

    // Append elements to the note
    note.appendChild(noteTitleElement);
    note.appendChild(noteContentElement);
    note.appendChild(deleteBtn);

    // Add note to the notes section
    notesSection.appendChild(note);

    // Clear input fields
    noteTitleInput.value = '';
    noteContentInput.value = '';
});
