const User = (Sequelize, DataTypes) => {
    return Sequelize.define(
        "user", // create table visitor () 1. 테이블 이름
        { // 2. 컬럼 정의
            id: { //id int not null primary key auto_increment정의를 아래와 같이 한 것.
                type: DataTypes.STRING(10),
                allowNull: false,
                primaryKey: true
            },
            pw: { // comment mediumtext
                type: DataTypes.STRING(20),
                allowNull: true  //true가 default이긴 함.
            },
            name: { // name varchar(10) not null 
                type: DataTypes.STRING(10),
                allowNull: false
            }
        },
        { // 모델 옵션 정의
            tableName: "user", //select * from visitor;
            //Sequelize는 자동으로 복수형태로 바꾸는데 바꾸지 않고 그대로 사용하겠다는 옵션
            freezeTableName: true,
            timestamps: false 
            // default 값 true ... createdAt modifyAt 컬럼에 수정한 시간을 저장하려고 한다.
            // 만약 저장 하고 싶으면 컬럼을 만든 후 timestamp: true로 하면 됨.
            //collate, charset : "UTF8" 이라는 옵션이 있는데 인코딩 설정이 자동으로 설정되어 있으므로 안해도 됨. 
        }
    );
}

module.exports = User;