import { Button } from '@hilla/react-components/Button.js';
import { Notification } from '@hilla/react-components/Notification.js';
import { TextField } from '@hilla/react-components/TextField.js';
import { HelloWorldService } from 'Frontend/generated/endpoints.js';
import { useState } from 'react';
import css from './HelloWorld.module.css';




export default function HelloWorldView() {
  const [name, setName] = useState('');

  return (
    <>
      <section className="flex p-m gap-m items-end">

        <h1 className="h-xl bg-error-50 border text-center  m-auto">My Student Managment System</h1>

      </section>

        <Button theme="primary"  >Primary</Button>

        <a href="https://bobbyhadz.com" target="_blank" rel="noopener noreferrer">
        <Button theme="primary"  >Primary</Button>
      </a>
    </>
  );
}
