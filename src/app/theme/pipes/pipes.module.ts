import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgPipesModule } from 'ngx-pipes';

import { ProfilePicturePipe } from './profilePicture/profilePicture.pipe';
import { ChatPersonSearchPipe } from './search/chat-person-search.pipe';
import { UserSearchPipe } from './search/user-search.pipe';
import { TruncatePipe } from './truncate/truncate.pipe';
import { MailSearchPipe } from './search/mail-search.pipe';
import { FuncionarioSearchPipe } from './search/funcionario-search.pipe';
import { ActivosSearchPipe } from './search/activos-search.pipe';
import { NumeroempSearchPipe } from './search/numeroemp-search.pipe';
import { NombreSearchPipe } from './search/nombre-search.pipe';
import { AppaternoSearchPipe } from './search/appaterno-search.pipe';
import { ApmaternoSearchPipe } from './search/apmaterno-search.pipe';
import { NomusuarioSearchPipe } from './search/nomusuario-search.pipe';
import { AgenciaSearchPipe } from './search/agencia-search.pipe';
import { LatinisePipe } from 'ngx-pipes';

@NgModule({
    imports: [ 
        CommonModule,
        NgPipesModule
    ],
    declarations: [
        ProfilePicturePipe,
        ChatPersonSearchPipe,
        UserSearchPipe,
        TruncatePipe,
        MailSearchPipe,
        FuncionarioSearchPipe,
        ActivosSearchPipe,
        NumeroempSearchPipe,
        NombreSearchPipe,
        AppaternoSearchPipe,
        ApmaternoSearchPipe,
        NomusuarioSearchPipe,
        AgenciaSearchPipe
    ],
    exports: [
        ProfilePicturePipe,
        ChatPersonSearchPipe,
        UserSearchPipe,
        TruncatePipe,
        MailSearchPipe,
        FuncionarioSearchPipe,
        ActivosSearchPipe,
        NumeroempSearchPipe,
        NombreSearchPipe,
        AppaternoSearchPipe,
        ApmaternoSearchPipe,
        NomusuarioSearchPipe,
        AgenciaSearchPipe
    ]
})
export class PipesModule { }
