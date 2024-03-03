import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TreeModule } from 'primeng/tree';
import { TreeTableModule } from 'primeng/treetable';
import { TreeNode } from 'primeng/api';
import { NodeService } from '../../../services/node.service';

@Component({
  selector: 'app-tree',
  standalone: true,
  imports: [CommonModule, FormsModule, TreeModule, TreeTableModule],
  templateUrl: './tree.component.html',
  providers: [NodeService],
})
export class TreeComponent implements OnInit {
  files1: TreeNode[] = [];

  files2: TreeNode[] = [];

  files3: TreeNode[] = [];

  selectedFiles1: TreeNode[] = [];

  selectedFiles2: TreeNode[] = [];

  selectedFiles3: TreeNode = {};

  cols: any[] = [];

  constructor(private nodeService: NodeService) {}

  ngOnInit() {
    this.nodeService.getFiles().then((files) => (this.files1 = files));
    this.nodeService.getFilesystem().then((files) => (this.files2 = files));
    this.nodeService.getFiles().then((files) => {
      this.files3 = [
        {
          label: 'Root',
          children: files,
        },
      ];
    });

    this.cols = [
      { field: 'name', header: 'Name' },
      { field: 'size', header: 'Size' },
      { field: 'type', header: 'Type' },
    ];
  }
}
