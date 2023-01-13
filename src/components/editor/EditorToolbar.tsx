import { Quill } from 'react-quill'

import Image from 'next/image'

import clsx from 'clsx'

import styles from './EditorToolbar.module.scss'
import stylesEditor from './ReactQuill.module.scss'
import {
  BACKGROUND_COLOR,
  COLOR,
  FONT_FAMILY,
  FONT_SIZE,
  HEADINGS,
} from './config'

interface IEditorToolbarProps {
  id?: string
  isSimple?: boolean
}

type QuillHistoryMethod = {
  quill: {
    history: {
      undo: () => void
      redo: () => void
    }
  }
}

const Size = Quill.import('attributors/style/size')
Size.whitelist = FONT_SIZE
Quill.register(Size, true)

const Font = Quill.import('attributors/style/font')
Font.whitelist = FONT_FAMILY
Quill.register(Font, true)

export function undoChange(this: QuillHistoryMethod) {
  this.quill.history.undo()
}

export function redoChange(this: QuillHistoryMethod) {
  this.quill.history.redo()
}

const EditorToolbar = ({
  id = 'ft-editor',
  isSimple,
}: IEditorToolbarProps): React.ReactElement => {
  return (
    <div
      className={clsx(
        styles['editor-toolbar-wrapper'],
        stylesEditor['react-quill'],
      )}
    >
      <div className='editor-toolbar-container react-quill-container'>
        <div id={id}>
          <div className='ql-formats'>
            {!isSimple && (
              <>
                <select className='ql-font' defaultValue=''>
                  <option value=''>Font</option>

                  {FONT_FAMILY.map((font) => (
                    <option key={font} value={font}>
                      {font}
                    </option>
                  ))}
                </select>

                <select className='ql-size' defaultValue='16px'>
                  {FONT_SIZE.map((size) => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
              </>
            )}

            <select className='ql-header' defaultValue=''>
              {HEADINGS.map((heading, index) => (
                <option key={heading} value={index + 1}>
                  {heading}
                </option>
              ))}

              <option value=''>Normal</option>
            </select>
          </div>

          <div className='ql-formats'>
            <button type='button' className='ql-bold' />
            <button type='button' className='ql-italic' />
            <button type='button' className='ql-underline' />
            <button type='button' className='ql-strike' />
          </div>

          {!isSimple && (
            <div className='ql-formats'>
              <select className='ql-color'>
                {COLOR.map((color) => (
                  <option key={`ql-color-${color}`} value={color} />
                ))}
              </select>

              <select className='ql-background'>
                {BACKGROUND_COLOR.map((color) => (
                  <option key={`ql-background-${color}`} value={color} />
                ))}
              </select>
            </div>
          )}

          <div className='ql-formats'>
            <button type='button' className='ql-list' value='ordered' />
            <button type='button' className='ql-list' value='bullet' />

            {!isSimple && (
              <>
                <button type='button' className='ql-indent' value='-1' />
                <button type='button' className='ql-indent' value='+1' />
              </>
            )}
          </div>

          {!isSimple && (
            <div className='ql-formats'>
              <button type='button' className='ql-script' value='super' />
              <button type='button' className='ql-script' value='sub' />
            </div>
          )}

          {!isSimple && (
            <div className='ql-formats'>
              <button type='button' className='ql-code-block' />
              <button type='button' className='ql-blockquote' />
            </div>
          )}

          <div className='ql-formats'>
            <button type='button' className='ql-direction' value='rtl' />
            <select className='ql-align' />
          </div>

          <div className='ql-formats'>
            <button type='button' className='ql-link' />
            <button type='button' className='ql-image' />
            <button type='button' className='ql-video' />
          </div>

          <div className='ql-formats'>
            <button type='button' className='ql-clean' />
          </div>

          {!isSimple && (
            <div className='ql-formats'>
              <button type='button' className='ql-undo editor-icon-undo'>
                <Image
                  alt='Icon undo editor'
                  src='/images/react-quill/IconUndoEditor.svg'
                  width={18}
                  height={18}
                />
              </button>

              <button type='button' className='ql-redo editor-icon-redo'>
                <Image
                  alt='Icon redo editor'
                  src='/images/react-quill/IconRedoEditor.svg'
                  width={18}
                  height={18}
                />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default EditorToolbar
