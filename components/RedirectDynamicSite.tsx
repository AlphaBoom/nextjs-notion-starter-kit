import * as React from 'react'

import styles from './styles.module.css'

export const RedirectDynamicSite: React.FC = () => {
    return (
        <div className={styles.redirectDiv}>
            <a href="https://notion.alphaboom.cn"
                target="_blank"
                title="这是部署于Github的静态备份站点，点击访问真实站点"
                className={styles.redirectA}
            >
                <span className={styles.redirectSpan}>图片加载不出来？点击这里</span>
            </a>
        </div>
    )
}