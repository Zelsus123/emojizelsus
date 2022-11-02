import React, { useRef } from 'react'
import EmojiPicker from './EmojiPicker'

function EmojiPickerInput() {
const refInput = useRef(null);

return (
    <div>
         <input ref={refInput} />
         <EmojiPicker ref={refInput}/>
    </div>
  )
}

export default EmojiPickerInput