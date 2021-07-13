function hasPermission(resources, route) {
  debugger;
  for (let resource of resources) {
    console.log("hasPermission", resource.resourceName);
    if (resource.resourceName === route) {
      console.log(resource.resourceName, "resource.resourceName");
      return true;
    }
    if (resource.children && resource.children.length !== 0) {
      return hasPermission(resource.children, route);
    }
  }
}

const resources = [
  {
    message: "",
    code: 1,
    data: [
      {
        resourceName: "角色管理",
        children: [
          {
            resourceName: "角色管理页面",
            children: [
              {
                resourceName: "角色管理新增按钮",
                children: null,
              },
              {
                resourceName: "角色新增",
                children: null,
              },
            ],
          },
        ],
      },
      {
        resourceName: "员工管理",
        children: [
          {
            resourceName: "员工管理页面",
            children: [
              {
                resourceName: "新增员工",
                children: null,
              },
              {
                resourceName: "修改员工",
                children: null,
              },
              {
                resourceName: "删除按钮",
                children: null,
              },
            ],
          },
        ],
      },
      {
        resourceName: "业务安全中心",
        children: [
          {
            resourceName: "资源管理",
            children: [
              {
                resourceName: "资源管理查询按钮",
                children: null,
              },
              {
                resourceName: "资源管理重置按钮",
                children: null,
              },
            ],
          },
          {
            resourceName: "角色管理",
            children: [
              {
                resourceName: "角色管理新增按钮",
                children: null,
              },
              {
                resourceName: "角色管理查询按钮",
                children: null,
              },
            ],
          },
          {
            resourceName: "业务岗位管理",
            children: null,
          },
          {
            resourceName: "系统别管理",
            children: [
              {
                resourceName: "启用",
                children: null,
              },
              {
                resourceName: "系统别启用按钮",
                systemId: "1273990937554547968",
                children: null,
              },
              {
                resourceName: "系统别查询按钮",
                children: null,
              },
              {
                resourceName: "系统别重置按钮",
                children: null,
              },
              {
                resourceName: "系统别管理新增",
                children: null,
              },
              {
                resourceName: "系统别新增按钮",
                children: null,
              },
              {
                resourceName: "系统别编辑按钮",
                children: null,
              },
              {
                resourceName: "系统别禁用按钮",
                children: null,
              },
              {
                resourceName: "系统别详情按钮",
                children: null,
              },
              {
                resourceName: "系统别删除按钮",
                children: null,
              },
            ],
          },
        ],
      },
    ],
  },
];

const route = "业务安全中心";

hasPermission(resources, route);
