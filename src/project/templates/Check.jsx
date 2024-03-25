import React from 'react'

import toast, { Toaster } from 'react-hot-toast';

const Check = () => {

  const notify = () => toast('Here is your toast.');
  return (
    <div>
      <button onClick={notify}>Make me a toast</button>
      <Toaster />
    </div>
  )
}

export default Check
