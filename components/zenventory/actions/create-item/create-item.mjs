import zenventory from "../../zenventory.app.mjs";

export default {
  key: "zenventory-create-item",
  name: "Create Item",
  description: "Generates a new item. [See the documentation](https://docs.zenventory.com/#tag/items/paths/~1items/post)",
  version: "0.0.1",
  type: "action",
  props: {
    zenventory,
    sku: {
      type: "string",
      label: "SKU",
      description: "The item's SKU.",
    },
    clientId: {
      propDefinition: [
        zenventory,
        "clientId",
      ],
      description: "Id of the client that the item belongs to. Defaults to the user's client id.",
      optional: true,
    },
    clientName: {
      propDefinition: [
        zenventory,
        "clientName",
      ],
      description: "Name of the client that the item belongs to. Ignored if clientId is provided and is nonzero.",
      optional: true,
    },
    upc: {
      type: "string",
      label: "UPC",
      description: "The item's UPC.",
      optional: true,
    },
    description: {
      type: "string",
      label: "Description",
      description: "The item's description.",
      optional: true,
    },
    category: {
      type: "string",
      label: "Category",
      description: "The item's category to be grouped by.",
      optional: true,
    },
    baseUom: {
      type: "string",
      label: "Base UOM",
      description: "The item's base unit of measurement.",
      optional: true,
    },
    unitCost: {
      type: "string",
      label: "Unit Cost",
      description: "How much the item costs you to stock.",
      optional: true,
    },
    leadTime: {
      type: "integer",
      label: "Lead Time",
      description: "The item's lead time.",
      optional: true,
    },
    defaultEconOrder: {
      type: "integer",
      label: "Default Econ Order",
      description: "The item's default order quantity for purchase orders.",
      optional: true,
    },
    orderLimit: {
      type: "integer",
      label: "Order Limit",
      description: "The item's order limit.",
      optional: true,
    },
    rrp: {
      type: "string",
      label: "RRP",
      description: "The item's recommended retail price.",
      optional: true,
    },
    price: {
      type: "string",
      label: "Price",
      description: "How much the item is sold for.",
      optional: true,
    },
    active: {
      type: "boolean",
      label: "Active",
      description: "True if the item is active. Inactive items are hidden from most processes.",
      optional: true,
    },
    kit: {
      type: "boolean",
      label: "Kit",
      description: "True if the item is a kit item made up of other items. An item cannot both be a kit and an assembly item.",
      optional: true,
    },
    assembly: {
      type: "boolean",
      label: "Assembly",
      description: "True if the item is stocked by combining other items together. An item cannot both be a kit and an assembly item.",
      optional: true,
    },
    perishable: {
      type: "boolean",
      label: "Perishable",
      description: "True if the item has an expiration date. A non-inventory or serialized item cannot also be this.",
      optional: true,
    },
    trackLot: {
      type: "boolean",
      label: "Track Lot",
      description: "True if the item is tracked by lot numbers. A non-inventory or serialized item cannot also be this.",
      optional: true,
    },
    serialized: {
      type: "boolean",
      label: "Serialized",
      description: "True if the item is tracked by serial numbers. A non-inventory item cannot be serialized.",
      optional: true,
    },
    nonInventory: {
      type: "boolean",
      label: "Non Inventory",
      description: "True if the item does not have inventory. A kit or assembly cannot also be non-inventory.",
      optional: true,
    },
    weight: {
      type: "string",
      label: "Weight",
      description: "The item's weight.",
      optional: true,
    },
    storageLength: {
      type: "string",
      label: "Storage Length",
      description: "Part of the dimensions the item takes to store.",
      optional: true,
    },
    storageWidth: {
      type: "string",
      label: "Storage Width",
      description: "Part of the dimensions the item takes to store.",
      optional: true,
    },
    storageHeight: {
      type: "string",
      label: "Storage Height",
      description: "Part of the dimensions the item takes to store.",
      optional: true,
    },
    safetyStock: {
      type: "integer",
      label: "Safety Stock",
      description: "How much stock should be withheld when reporting stock levels to marketplace integrations.",
      optional: true,
    },
    userField1: {
      type: "string",
      label: "User Field 1",
      description: "User defined field for the item.",
      optional: true,
    },
    userField2: {
      type: "string",
      label: "User Field 2",
      description: "User defined field for the item.",
      optional: true,
    },
    userField3: {
      type: "string",
      label: "User Field 3",
      description: "User defined field for the item.",
      optional: true,
    },
    userField4: {
      type: "string",
      label: "User Field 4",
      description: "User defined field for the item.",
      optional: true,
    },
    userField5: {
      type: "string",
      label: "User Field 5",
      description: "User defined field for the item.",
      optional: true,
    },
    userField6: {
      type: "string",
      label: "User Field 6",
      description: "User defined field for the item.",
      optional: true,
    },
    notes: {
      type: "string",
      label: "Notes",
      description: "Notes for the item.",
      optional: true,
    },
    assignToAllWarehouses: {
      type: "boolean",
      label: "Assign To All Warehouses",
      description: "True to assign to all warehouses on creation.",
      optional: true,
    },
    assignToWarehouse: {
      type: "boolean",
      label: "Assign To Warehouse",
      description: "True to assign the item to a specific warehouse.",
      optional: true,
    },
    warehouseId: {
      type: "integer",
      label: "Warehouse Id",
      description: "Id of the warehouse the item will be assigned to. If no warehouse parameters are given, then the user's current warehouse will be used.",
      optional: true,
    },
    warehouseName: {
      type: "string",
      label: "Warehouse Name",
      description: "Name of the warehouse the item will be assigned to. Ignored if warehouseId is provided.",
      optional: true,
    },
    reorderLevel: {
      type: "integer",
      label: "Reorder Level",
      description: "Reorder level for the item's warehouse assignment.",
      optional: true,
    },
  },
  async run({ $ }) {
    const response = await this.zenventory.createItem({
      $,
      data: {
        sku: this.sku,
        clientId: this.clientId,
        clientName: this.clientName,
        upc: this.upc,
        description: this.description,
        category: this.category,
        baseUom: this.baseUom,
        unitCost: this.unitCost && parseFloat(this.unitCost),
        leadTime: this.leadTime,
        defaultEconOrder: this.defaultEconOrder,
        orderLimit: this.orderLimit,
        rrp: this.rrp && parseFloat(this.rrp),
        price: this.price && parseFloat(this.price),
        active: this.active,
        kit: this.kit,
        assembly: this.assembly,
        perishable: this.perishable,
        trackLot: this.trackLot,
        serialized: this.serialized,
        nonInventory: this.nonInventory,
        weight: this.weight && parseFloat(this.weight),
        storageLength: this.storageLength && parseFloat(this.storageLength),
        storageWidth: this.storageWidth && parseFloat(this.storageWidth),
        storageHeight: this.storageHeight && parseFloat(this.storageHeight),
        safetyStock: this.safetyStock,
        userField1: this.userField1,
        userField2: this.userField2,
        userField3: this.userField3,
        userField4: this.userField4,
        userField5: this.userField5,
        userField6: this.userField6,
        notes: this.notes,
        assignToAllWarehouses: this.assignToAllWarehouses,
        assignToWarehouse: this.assignToWarehouse,
        warehouseId: this.warehouseId,
        warehouseName: this.warehouseName,
        reorderLevel: this.reorderLevel,
      },
    });

    $.export("$summary", `Successfully created purchase order with ID ${response.id}`);
    return response;
  },
};
