import { Button } from '@arco-design/web-react';
import { useMachine } from '@xstate/react';
import './App.css'

import { Request } from './api/request';
import { TagMachine } from './machine/tag';

function App() {
  const [current, send] = useMachine(TagMachine)

  const { tags } = current.context;

  console.log(tags)

  return (
    <div className="App p-15 m-100 bg-primary">
      <Button type="primary">测试</Button>
      {
        tags.map(
          i => <Button key={i.Id}>
            {
              i.Name
            }
          </Button>
        )
      }
    </div>
  )
}

export default App
