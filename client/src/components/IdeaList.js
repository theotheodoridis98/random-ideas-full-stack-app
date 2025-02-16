class IdeaList {
  constructor() {
    this.ideaListEl = document.querySelector('#idea-list');
    this.ideas = [
      {
        id: 1,
        text: 'Idea 1',
        tag: 'Business',
        username: 'John',
        date: '24-01-2025',
      },
      {
        id: 2,
        text: 'Idea 2',
        tag: 'Technology',
        username: 'Jill',
        date: '24-01-2025',
      },
      {
        id: 3,
        text: 'Idea 3',
        tag: 'Business',
        username: 'Jack',
        date: '24-01-2025',
      },
    ];

    this.validTags = new Set();
    this.validTags.add('business');
    this.validTags.add('software');
    this.validTags.add('technology');
    this.validTags.add('education');
    this.validTags.add('health');
    this.validTags.add('inventions');
  }

  getTagClass(tag) {
    tag = tag.toLowerCase(); // Assign the lowercased value
    let tagClass = '';
    if (this.validTags.has(tag)) {
      tagClass = `tag-${tag}`;
    }
    return tagClass;
  }

  render() {
    this.ideaListEl.innerHTML = this.ideas
      .map((idea) => {
        const tagClass = this.getTagClass(idea.tag);
        return `
        <div class="card">
          <button class="delete"><i class="fas fa-times"></i></button>
          <h3>
            ${idea.text}
          </h3>
          <p class="tag ${tagClass}">${idea.tag.toUpperCase()}</p>
          <p>
            Posted on <span class="date">${idea.date}</span> by
            <span class="author">${idea.username}</span>
          </p>
        </div>
        `;
      })
      .join('');
  }
}

export default IdeaList;
