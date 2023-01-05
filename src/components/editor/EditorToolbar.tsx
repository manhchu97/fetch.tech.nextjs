import { Quill } from 'react-quill'

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
  id,
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
              <select className='ql-font' defaultValue=''>
                <option value=''>Font</option>
                {FONT_FAMILY.map((font) => (
                  <option key={font} value={font}>
                    {font}
                  </option>
                ))}
              </select>
            )}

            {!isSimple && (
              <select className='ql-size' defaultValue='16px'>
                {FONT_SIZE.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
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
              <button type='button' className='ql-indent' value='-1' />
            )}
            {!isSimple && (
              <button type='button' className='ql-indent' value='+1'>
                <svg viewBox='0 0 18 18'>
                  {' '}
                  <line
                    className='ql-stroke'
                    x1='3'
                    x2='15'
                    y1='14'
                    y2='14'
                  ></line>{' '}
                  <line
                    className='ql-stroke'
                    x1='3'
                    x2='15'
                    y1='4'
                    y2='4'
                  ></line>{' '}
                  <line
                    className='ql-stroke'
                    x1='9'
                    x2='15'
                    y1='9'
                    y2='9'
                  ></line>{' '}
                  <polyline
                    className='ql-fill ql-stroke'
                    points='3 7 3 11 5 9 3 7'
                  ></polyline>{' '}
                </svg>
              </button>
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
              <button type='button' className='ql-undo'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='1em'
                  height='1em'
                  preserveAspectRatio='xMidYMid meet'
                  viewBox='0 0 24 24'
                >
                  <path d='M12.5 8c-2.65 0-5.05.99-6.9 2.6L3.71 8.71C3.08 8.08 2 8.52 2 9.41V15c0 .55.45 1 1 1h5.59c.89 0 1.34-1.08.71-1.71l-1.91-1.91c1.39-1.16 3.16-1.88 5.12-1.88c3.16 0 5.89 1.84 7.19 4.5c.27.56.91.84 1.5.64c.71-.23 1.07-1.04.75-1.72C20.23 10.42 16.65 8 12.5 8z' />
                </svg>
              </button>

              <button type='button' className='ql-redo'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='1em'
                  height='1em'
                  preserveAspectRatio='xMidYMid meet'
                  viewBox='0 0 24 24'
                >
                  <path d='M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.16 0-7.74 2.42-9.44 5.93c-.32.67.04 1.47.75 1.71c.59.2 1.23-.08 1.5-.64c1.3-2.66 4.03-4.5 7.19-4.5c1.95 0 3.73.72 5.12 1.88l-1.91 1.91c-.63.63-.19 1.71.7 1.71H21c.55 0 1-.45 1-1V9.41c0-.89-1.08-1.34-1.71-.71l-1.89 1.9z' />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default EditorToolbar
