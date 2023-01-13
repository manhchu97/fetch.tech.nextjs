import ReactQuill from 'react-quill'

import clsx from 'clsx'

import styles from './Editor.module.scss'
import EditorToolbar, { redoChange, undoChange } from './EditorToolbar'
import stylesEditor from './ReactQuill.module.scss'
import { FORMATS } from './config'

interface IEditorProps {
  value: string
  onChange: () => void
  style?: object
}

const Editor = ({
  value = '',
  onChange,
  style,
  ...other
}: IEditorProps): React.ReactElement => {
  const modules = {
    toolbar: {
      container: '#toolbar',
      handlers: {
        undo: undoChange,
        redo: redoChange,
      },
    },
    history: {
      delay: 500,
      maxStack: 100,
      userOnly: true,
    },
  }

  return (
    <div
      className={clsx(
        'ft-full-screen',
        styles['client-editor'],
        stylesEditor['react-quill'],
      )}
    >
      <div className='client-editor-container react-quill-container '>
        <EditorToolbar id='toolbar' isSimple={false} />
        <ReactQuill
          theme='snow'
          placeholder='Write something awesome...'
          modules={modules}
          formats={FORMATS}
          onChange={onChange}
          value={value}
          style={style}
          {...other}
        />
      </div>
    </div>
  )
}

export default Editor
