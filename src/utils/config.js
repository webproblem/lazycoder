/**
 * 元件列表
 */
export const elementList = [
    {
        element: 'Text',
        text: 'Text文字'
    },
    {
        element: 'Image',
        text: 'Image图片'
    },
    {
        element: 'Input',
        text: 'Input输入框',
    },
    {
        element: 'Button',
        text: 'Button按钮'
    }
];

/**
 * 元件的默认配置
 */
export const defaultParams = {
    page: {
        name: 'Page',
        backgroundColor: '#fff'
    },
    input: {
        name: 'Input',
        vmodel: '',
        width: 200,
        height: 0,
        size: 'default',
        type: 'text',
        rows: 5,
        left: 20,
        top: 20,
        position: 'absolute',
        placeholder: "请输入内容"
    },
    text: {
        name: 'Text',
        content: '请输入文本',
        width: 200,
        height: 30,
        minHeight: 30,
        left: 20,
        top: 20,
        position: 'absolute',
        fontSize: 16,
        color: '#000000',
        fontStyle: 'normal',
        fontWeight: 'normal',
        textDecoration: 'none',
        align: 'left',
        lineHeight: 1.2,
        rotate: 360,
        opacity: 100
    }
};