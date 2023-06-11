abstract class Component {
  protected static inputView(
    placeholderText: string,
    buttonText: string
  ): string {
    return `
      <div>
        <input type="text" class="todo-input" placeholder="${placeholderText}" />
        <button class="add-btn">${buttonText}</button>
      </div>
    `
  }
}

export default Component
