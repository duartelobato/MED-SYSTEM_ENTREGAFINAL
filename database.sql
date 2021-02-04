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
                            pac_estado enum('ALTA', 'ESTAVEL', 'GRAVE'),
							primary key (pac_id));	   
                            
                            
alter table cama add constraint cama_fk_ala
            foreign key (cama_ala_id) references ala(ala_id) 
			ON DELETE NO ACTION ON UPDATE NO ACTION;
            
alter table cama add constraint cama_fk_pac
            foreign key (cama_pac_id) references paciente(pac_id) 
			ON DELETE NO ACTION ON UPDATE NO ACTION;