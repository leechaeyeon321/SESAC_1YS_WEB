// sequelize는 사용을 하려면 실제 데이터베이스에 저장된 테이블 정보를 자바스크립트 언어로써 한번 정리를 해줘야 한다.
// Visitor.js table을 javascript로 정의해 둔다.

const Visitor = (Sequelize, DataTypes) => {
    return Sequelize.define(
        "visitor", // create table visitor () 1. 테이블 이름
        { // 2. 컬럼 정의
            id: { //id int not null primary key auto_increment정의를 아래와 같이 한 것.
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            name: { // name varchar(10) not null 
                type: DataTypes.STRING(10),
                allowNull: false
            },
            comment: { // comment mediumtext
                type: DataTypes.TEXT('medium'),
                allowNull: true  //true가 default이긴 함.
            }
        },
        { // 모델 옵션 정의
            tableName: "visitor", //select * from visitor;
            //Sequelize는 자동으로 복수형태로 바꾸는데 바꾸지 않고 그대로 사용하겠다는 옵션
            freezeTableName: true,
            timestamps: false 
            // default 값 true ... createdAt modifyAt 컬럼에 수정한 시간을 저장하려고 한다.
            // 만약 저장 하고 싶으면 컬럼을 만든 후 timestamp: true로 하면 됨.
            //collate, charset : "UTF8" 이라는 옵션이 있는데 인코딩 설정이 자동으로 설정되어 있으므로 안해도 됨. 
        }
    );
}

module.exports = Visitor;