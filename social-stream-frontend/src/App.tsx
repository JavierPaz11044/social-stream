import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
} from '@material-tailwind/react';
import type React from 'react';
const App: React.FC = () => {
  return (
    <Popover>
      <PopoverHandler>
        <Button>Show Popover</Button>
      </PopoverHandler>
      <PopoverContent>
        This is a very beautiful popover, show some love.
      </PopoverContent>
    </Popover>
  );
};

export default App;
