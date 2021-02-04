drop table cama;
drop table ala;
drop table paciente;


create table ala (ala_id int not null auto_increment,
					 ala_numero varchar(30) not null,
					 ala_descricao varchar(60),
					 primary key (ala_id));
		     		     
create table cama (cama_id int not null auto_increment,
                     cama_ala_id int,
                     cama_pac_id int,
                     cama_datainicial date,
					 primary key (cama_id));
                     
		           
create table paciente (pac_id int not null auto_increment,
						    pac_nome varchar(60) not null,
							pac_idade int not null,
                            pac_altura double not null,
                            pac_peso double not null,
                            pac_doenca varchar(60) not null,
                            pac_entrada date not null,
                            pac_estado enum('ALTA', 'ESTAVEL', 'GRAVE','nada'),
							primary key (pac_id));	   
                            
                            
alter table cama add constraint cama_fk_ala
            foreign key (cama_ala_id) references ala(ala_id) 
			ON DELETE NO ACTION ON UPDATE NO ACTION;
            
alter table cama add constraint cama_fk_pac
            foreign key (cama_pac_id) references paciente(pac_id) 
			ON DELETE NO ACTION ON UPDATE NO ACTION;



insert into paciente (pac_id, pac_nome, pac_idade, pac_altura, pac_peso, pac_doenca, pac_entrada, pac_estado) values(0, 'decoy', 0, 0.00, 0.00, 'nada', '1900.01.01', 'nada');
update paciente set pac_id = 0 where pac_id = 1;



insert into ala (ala_numero, ala_descricao) values('I','doentes I');
insert into ala (ala_numero, ala_descricao) values('II','doentes II');
insert into ala (ala_numero, ala_descricao) values('III','doentes III');
insert into ala (ala_numero, ala_descricao) values('IV','doentes IV');

insert into paciente (pac_nome, pac_idade, pac_altura, pac_peso, pac_doenca, pac_entrada, pac_estado) values('João', 34, 1.87, 89.45, 'Infeção Pulmonar','2020.04.16', 'ESTAVEL');
insert into paciente (pac_nome, pac_idade, pac_altura, pac_peso, pac_doenca, pac_entrada, pac_estado) values('Maria', 89, 1.65, 50.10, 'Fratura', '2020.12.06', 'ALTA');
insert into paciente (pac_nome, pac_idade, pac_altura, pac_peso, pac_doenca, pac_entrada, pac_estado) values('Pedro', 76, 1.78, 70.74, 'Cancro', '2020.12.01', 'GRAVE');


insert into cama (cama_ala_id, cama_pac_id, cama_datainicial) values(1, 2,'2020.04.16');
insert into cama (cama_ala_id, cama_pac_id, cama_datainicial) values(1, 0, '1900.01.01');
insert into cama (cama_ala_id, cama_pac_id, cama_datainicial) values(1, 3,'2020.12.06');
insert into cama (cama_ala_id, cama_pac_id, cama_datainicial) values(1, 0, '1900.01.01');
insert into cama (cama_ala_id, cama_pac_id, cama_datainicial) values(1, 0, '1900.01.01');
insert into cama (cama_ala_id, cama_pac_id, cama_datainicial) values(2, 4,'2020.12.01');
insert into cama (cama_ala_id, cama_pac_id, cama_datainicial) values(2, 0, '1900.01.01');
insert into cama (cama_ala_id, cama_pac_id, cama_datainicial) values(2, 0, '1900.01.01');
insert into cama (cama_ala_id, cama_pac_id, cama_datainicial) values(2, 0, '1900.01.01');
insert into cama (cama_ala_id, cama_pac_id, cama_datainicial) values(2, 0, '1900.01.01');
insert into cama (cama_ala_id, cama_pac_id, cama_datainicial) values(3, 0, '1900.01.01');
insert into cama (cama_ala_id, cama_pac_id, cama_datainicial) values(3, 0, '1900.01.01');
insert into cama (cama_ala_id, cama_pac_id, cama_datainicial) values(3, 0, '1900.01.01');
insert into cama (cama_ala_id, cama_pac_id, cama_datainicial) values(3, 0, '1900.01.01');
insert into cama (cama_ala_id, cama_pac_id, cama_datainicial) values(3, 0, '1900.01.01');
insert into cama (cama_ala_id, cama_pac_id, cama_datainicial) values(4, 0, '1900.01.01');
insert into cama (cama_ala_id, cama_pac_id, cama_datainicial) values(4, 0, '1900.01.01');
insert into cama (cama_ala_id, cama_pac_id, cama_datainicial) values(4, 0, '1900.01.01');
insert into cama (cama_ala_id, cama_pac_id, cama_datainicial) values(4, 0, '1900.01.01');
insert into cama (cama_ala_id, cama_pac_id, cama_datainicial) values(4, 0, '1900.01.01');





