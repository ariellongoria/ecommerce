const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", (req, res) => {
    // find all categories
    Category.findAll({
        attributes: ["id", "category_name"],
        include: [
            {
                model: Product,
                attributes: ["product_name"],
            },
        ],
    })
        .then((categoryData) => res.json(categoryData))
        .catch((err) => console.log(err));
});

// find category by id
router.get("/:id", (req, res) => {
    Category.findOne({
        where: { id: req.params.id },
        attributes: ["id", "category_name"],
        include: [
            {
                model: Product,
                attributes: ["product_name"],
            },
        ],
    })
        .then((categoryData) => {
            if (!categoryData) {
                res.status(400).json({ message: "Np category found with this id!" });
                return;
            }
            res.json(categoryData);
        })
        .catch((err) => console.log(err));
});

// create category
router.post("/", (req, res) => {
    Category.create({ category_name: req.body.category_name })
        .then((categoryData) => res.json(categoryData))
        .catch((err) => console.log(err));
});

// update category name
router.put("/:id", (req, res) => {
    Category.update({ category_name: req.body.category_name }, { where: { id: req.params.id } })
        .then((categoryData) => res.json(categoryData))
        .then((categoryData) => {
            if (!categoryData) {
                res.status(400).json({ message: "Np category found with this id!" });
                return;
            }
            res.json(categoryData);
        })
        .catch((err) => console.log(err));
});

// delete category
router.delete("/:id", (req, res) => {
    Category.destroy({ where: { id: req.params.id } })
        .then((categoryData) => {
            if (!categoryData) {
                res.status(400).json({ message: "Np category found with this id!" });
                return;
            }
            res.json(categoryData);
        })
        .catch((err) => console.log(err));
});

module.exports = router;
