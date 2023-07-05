// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CoreModule } from '../core/core.module';
import { PaygEntity } from '../project/project.model';
import { SubscriptionModule } from '../subscription/subscription.module';

import { PaygSyncService } from './pagy.sync.service';
import { ChainInfo, Channel, ChannelLabor } from './payg.model';
import { PaygResolver } from './payg.resolver';
import { PaygService } from './payg.service';

@Module({
  imports: [
    SubscriptionModule,
    CoreModule,
    TypeOrmModule.forFeature([Channel]),
    TypeOrmModule.forFeature([ChannelLabor]),
    TypeOrmModule.forFeature([ChainInfo]),
    TypeOrmModule.forFeature([PaygEntity]),
  ],
  providers: [PaygService, PaygSyncService, PaygResolver],
  exports: [PaygService],
})
export class PaygModule {}
