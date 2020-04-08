import {MigrationInterface, QueryRunner} from "typeorm";

export class MigracionUsuario1583873676081 implements MigrationInterface {
    name = 'MigracionUsuario1583873676081'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `user` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `description` varchar(255) NOT NULL, `createDate` datetime NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("DROP TABLE `user`", undefined);
    }

}
