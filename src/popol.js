import styles from './content.module.css';

function Popol(){
    return (
        <div>
            <h1>지녁 포트폴리오</h1>
            <p className={styles.content}>
                이 웹사이트는 개인 포트폴리오 사이트이다.<br/>
                메뉴구성은 Home, Skill&amp;About, Project, Contact를 글로벌 메뉴로 사용하며,<br/>
                단일 페이지 형식으로 제작 후 태블릿과 모바일 버전으로 반응형페이지를 제작 할 예정이다.
            </p>
        </div>
    );

}

export default Popol;