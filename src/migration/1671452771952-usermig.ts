import { MigrationInterface, QueryRunner } from "typeorm"

export class usermig1671452771952 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` ADD `address` TEXT NOT NULL AFTER `prodId`")
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` DROP `address`")
    }

}
