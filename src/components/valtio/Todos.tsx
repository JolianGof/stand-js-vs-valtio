import { useStore } from "../../stores/valtio-store"

export   const Todos = () => {
    const snap = useStore()
    return (
      <ul>
      {snap.todos.map(({ description, status, id }) => {
          return (
            <li key={id}>
              <span data-status={status} className="description">
                {description}
              </span>
              <button className="remove">x</button>
            </li>
          )
        })}
    </ul>
    )
  }