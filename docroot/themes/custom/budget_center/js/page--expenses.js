/**
 * @file
 */

(function($, Drupal) {
  'use strict';

  Drupal.behaviors.budgetCenterPageExpenses = {
    attach: function(context, settings) {
      var prefix = "₱ ";

      $(document).ready(function() {
        // Item expenses.
        $(".page--expenses-item table.table").once("expensesItem").DataTable({
          autoWidth: false,
          bSort: false,
          bLengthChange: false,
          iDisplayLength: 10,
          fixedHeader: {
            header: true,
          },
          scrollX:        true,
          scrollCollapse: true,
          fixedColumns:   {
            left: 3,
            right: 3,
          },
          oLanguage: {
            "sSearch": "Quick Filter Items:"
          },
          aoColumns: [
            {bSearchable: false},
            {bSearchable: false},
            {bSearchable: false},
            null,
            {bSearchable: false},
            {bSearchable: false},
            {bSearchable: false},
            {bSearchable: false},
            {bSearchable: false},
            {bSearchable: false},
            {bSearchable: false},
          ]
        });

        // Line expenses.
        $(".page--expenses-line table.table").once("expensesLine").DataTable({
          autoWidth: false,
          bSort: false,
          bLengthChange: false,
          iDisplayLength: 10,
          fixedHeader: {
            header: true,
          },
          scrollX:        true,
          scrollCollapse: true,
          fixedColumns:   {
            left: 2,
            right: 2,
          },
          oLanguage: {
            "sSearch": "Quick Filter Items:"
          },
          // bFilter: false,
          aoColumns: [
            {bSearchable: false},
            {bSearchable: false},
            null,
            {bSearchable: false},
            {bSearchable: false},
            {bSearchable: false},
            {bSearchable: false},
            {bSearchable: false},
            {bSearchable: false},
          ]
        });

        // Daily expenses.
        $(".page--expenses-daily table.table").DataTable({
          autoWidth: false,
          bSort: false,
          bLengthChange: false,
          iDisplayLength: 10,
          fixedHeader: {
            header: true,
          },
          scrollX:        true,
          scrollCollapse: true,
          fixedColumns:   {
            left: 2,
            right: 3,
          },
          bFilter: false,
        });

        // Weekly expenses.
        $(".page--expenses-weekly table.table").DataTable({
          autoWidth: false,
          bSort: false,
          bLengthChange: false,
          iDisplayLength: 10,
          fixedHeader: {
            header: true,
          },
          scrollX:        true,
          scrollCollapse: true,
          fixedColumns:   {
            left: 2,
            right: 3,
          },
          bFilter: false,
        });

        // Monthly expenses.
        $(".page--expenses-monthly table.table").DataTable({
          autoWidth: false,
          bSort: false,
          bLengthChange: false,
          iDisplayLength: 10,
          fixedHeader: {
            header: true,
          },
          scrollX:        true,
          scrollCollapse: true,
          fixedColumns:   {
            left: 2,
            right: 3,
          },
          bFilter: false,
        });
      });

    },
  };

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

})(jQuery, Drupal);

