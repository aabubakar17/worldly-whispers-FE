import React, { useState, useEffect } from "react";
import { Image, Dropdown, NavItem, NavLink } from "react-bootstrap";
import { getLatestArticles } from "../api";

const FilterManager = ({ currentCategory, setArticleList }) => {
  const [sortQuery, setSortQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("");

  useEffect(() => {
    getLatestArticles(currentCategory, sortQuery).then((articles) => {
      setArticleList(articles);
    });
  }, [sortQuery]);

  const handleFilterSelection = (sortQuery, filterName) => {
    setSortQuery(sortQuery);
    setSelectedFilter(filterName);
  };

  return (
    <div>
      <Dropdown as={NavItem}>
        <Dropdown.Toggle as={NavLink}>
          <Image
            className="FilterIcon-img"
            src="https://cdn-icons-png.flaticon.com/512/6488/6488674.png"
            thumbnail
          />
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item
            onClick={() =>
              handleFilterSelection(
                "sort_by=created_at&order=DESC",
                "Most Recent"
              )
            }
            active={selectedFilter === "Most Recent"}
          >
            Most Recent (default)
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() =>
              handleFilterSelection("sort_by=created_at&order=ASC", "Oldest")
            }
            active={selectedFilter === "Oldest"}
          >
            Oldest
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() =>
              handleFilterSelection(
                "sort_by=comment_count&order=DESC",
                "Comments (Highest to Lowest)"
              )
            }
            active={selectedFilter === "Comments (Highest to Lowest)"}
          >
            Comments (Highest to Lowest)
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() =>
              handleFilterSelection(
                "sort_by=comment_count&order=ASC",
                "Comments (Lowest to Highest)"
              )
            }
            active={selectedFilter === "Comments (Lowest to Highest)"}
          >
            Comments (Lowest to Highest)
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default FilterManager;
